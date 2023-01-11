document.addEventListener('DOMContentLoaded', () => {

    // Declarations
    const display = document.querySelector('#display');
    const record = document.querySelector('#record');
    const micInput = document.querySelector('#mic');

    let isRecording = false;
    let selectedDeviceId = null;
    let mediaRecorder = null;
    let chunks = [];

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
        chunks = [];
    }


});

window.onload = () => {
    document.body.classList.remove('preload');
}