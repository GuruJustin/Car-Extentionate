interface iphone {
    useLightning()
}

interface Android {
    useMicroUSB()
}

class iPhone7 {
    useLightning () {
        console.log('Using Lightning port...')
    }
}

class GooglePixel {
    useMicroUSB() {
        console.log('Using Micro USB...')
    }
}

class LightningToMicroUSBAdapter implements Android {
    private iphone : iphone

    constructor ( phone : iphone) {
        this.iphone = phone
    }

    useMicroUSB() {
        console.log('Want to use Micro USB, converting to Lightning.....')
        this.iphone.useLightning()
    }
}

let iphone = new iPhone7()
let useAdaptor = new LightningToMicroUSBAdapter(iphone)

useAdaptor.useMicroUSB()