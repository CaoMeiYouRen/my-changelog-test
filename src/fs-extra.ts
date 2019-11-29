import fs = require('fs-extra')
import path = require('path')
(async () => {
    try {
        if (!(await fs.pathExists(path.join(__dirname, '../dist')))) {
            await fs.mkdir(path.join(__dirname, '../dist'))
        }
        await fs.writeFile(path.join(__dirname, '../public/test.json'),
            JSON.stringify({
                msg: 'hello world'
            }, null, 4)
        )
        await fs.copyFile(path.join(__dirname, '../public/test.json'), path.join(__dirname, '../dist/test.json'))
        let json = (await fs.readFile(path.join(__dirname, '../dist/test.json'))).toString()
        console.log(JSON.parse(json))

    } catch (err) {
        console.error(err)
    }
})()
// async function copyFiles() {
//     try {
//         await fs.copy('/tmp/myfile', '/tmp/mynewfile')
//         console.log('success!')
//     } catch (err) {
//         console.error(err)
//     }
// }

// copyFiles()