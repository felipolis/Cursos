document.addEventListener('DOMContentLoaded', () => {

    // Declarations
    const display = document.querySelector('#display');
    const record = document.querySelector('#record');
    const micInput = document.querySelector('#mic');

    let isRecording = false;
    let selectedDeviceId = null;
    let mediaRecorder = null;
    let chunks = [];
    let startTime = null;

    // Get avaliable devices
    navigator.mediaDevices.enumerateDevices().then(devices => {
        devices.forEach(device => {
            if (device.kind === 'audioinput') {
                if (!selectedDeviceId) {
                    selectedDeviceId = device.deviceId;
                }

                const option = document.createElement('option');
                option.value = device.deviceId;
                option.text = device.label;

                micInput.appendChild(option);
            }
        })
    })

    micInput.addEventListener('change', (e) => {
        selectedDeviceId = e.target.value;
        console.log(selectedDeviceId)
    })

    record.addEventListener('click', () => {
        updateButtonTo(!isRecording);
        handleRecord(isRecording)

        isRecording = !isRecording;
    })

    function handleRecord() {
        if (isRecording){
            // stop
            mediaRecorder.stop();
        } else{
            // start
            navigator.mediaDevices.getUserMedia({
                audio: {
                    deviceId: selectedDeviceId
                },
                video: false
            }).then(stream => {
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.start();
                startTime = Date.now();
                updateDisplay()

                mediaRecorder.ondataavailable = (e) => {
                    chunks.push(e.data);
                }

                mediaRecorder.onstop = () => {
                    saveData();
                }
            })
        }
    }


    function updateButtonTo(recording){
        if (recording) {
            document.querySelector('#record').classList.add('recording');
            document.querySelector('#mic-icon').classList.add('hide')
        } else {
            document.querySelector('#record').classList.remove('recording');
            document.querySelector('#mic-icon').classList.remove('hide')
        }
    }

    function saveData() {
        const blob = new Blob(chunks, { type: 'audio/webm; codecs=opus' });
        console.log(blob)
        //document.querySelector('#audio').src = URL.createObjectURL(blob);
        chunks = [];
    }

    function updateDisplay() {
        display.innerHTML = durantionToTimestamp(Date.now() - startTime);
        if(isRecording){
            window.requestAnimationFrame(updateDisplay);
        }
    }

    function durantionToTimestamp(duration) {
        let milliseconds = parseInt((duration % 1000) / 100);
        let seconds = Math.floor((duration / 1000) % 60);
        let minutes = Math.floor((duration / 1000 / 60) % 60);
        let hours = Math.floor((duration / 1000 / 60 / 60));

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }


});

window.onload = () => {
    document.body.classList.remove('preload');
}