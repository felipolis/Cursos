document.addEventListener('DOMContentLoaded', () => {

    // Declarations
    const display = document.querySelector('#display');
    const record = document.querySelector('#record');
    const micInput = document.querySelector('#mic');

    let isRecording = false;
    let selectedDeviceId = null;

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

    function updateButtonTo(recording){
        if (recording) {
            document.querySelector('#record').classList.add('recording');
            document.querySelector('#mic-icon').classList.add('hide')
        } else {
            document.querySelector('#record').classList.remove('recording');
            document.querySelector('#mic-icon').classList.remove('hide')
        }
    }

});

window.onload = () => {
    document.body.classList.remove('preload');
}