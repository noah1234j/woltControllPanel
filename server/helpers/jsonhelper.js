const fs = require('fs');

class JSONHELPER {
    read(file) {
        this.rawData = fs.readFileSync(file)
        this.parsedFile = JSON.parse(this.rawData)
        return this.parsedFile
    }
    write(file, rawData) {
        try {
            this.data = JSON.stringify(rawData, null, 2)
            fs.writeFileSync(file, this.data)
            return "success"
        } catch (err) {
            return err
        }
    }
}

module.exports = JSONHELPER;
