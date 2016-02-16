# Web

#### Requirements
* Node.js 4.2.2+. [Installation instructions](install-node.md)

#### Configuration
Configuration is performed in [src/main.js](../../app-desktop/src/main.js) file. Read comments in example main.js. If you are going to use self hosted solution, then you need to change the line below:

```
const appUrl = 'https://dns.name.of.your.seerver:port/'
```

#### Build

Just run the script:

```bash
build.sh
```

inside app-desktop directory. under MacOS the script will create MacOS and Linux versions in the build/out directory. To create windows version of the app it is necessary to install Wine (https://www.winehq.org/) or do compilation process on the computer under Windows. 

#### Process of sigining application unders MacOS

1. First of all you need an apple developer id

2. You must request the developer ID certificate via KeyChain Access application and Apple Developer site (or Xcode may do it for you)

3. You must download certificate issued by Apple and install it to local key store

4. Finally you need to sign your application using the Developer ID Application certificate by executing 'codesign' utility several times (to sign every dependency of Electron one by one): 

```
codesign -v -f -s "3rd Party Mac Developer Application: Ivan Petrov (CDMQ33XXXX)" Actor.app/Contents/Frameworks/Actor\ Helper.app
Actor.app/Contents/Frameworks/Actor Helper.app: signed bundle with Mach-O thin (x86_64) [com.electron.actor.helper]

codesign -v -f -s "3rd Party Mac Developer Application: Ivan Petrov (CDMQ33XXXX)" Actor.app/Contents/Frameworks/Electron\ Framework.framework/Libraries/libnode.dylib 
Actor.app/Contents/Frameworks/Electron Framework.framework/Libraries/libnode.dylib: signed Mach-O thin (x86_64) [libnode]

codesign -v -f -s "3rd Party Mac Developer Application: Ivan Petrov (CDMQ33XXXX)" Actor.app/Contents/Frameworks/Electron\ Framework.framework
Actor.app/Contents/Frameworks/Electron Framework.framework: signed bundle with Mach-O thin (x86_64) [com.github.electron.framework]

codesign -v -f -s "3rd Party Mac Developer Application: Ivan Petrov (CDMQ33XXXX)" Actor.app/Contents/Frameworks/Actor\ Helper\ NP.app/Contents/MacOS/Actor\ Helper\ NP 
Actor.app/Contents/Frameworks/Actor Helper NP.app/Contents/MacOS/Actor Helper NP: signed Mach-O thin (x86_64) [Actor Helper NP]

codesign -v -f -s "3rd Party Mac Developer Application: Ivan Petrov (CDMQ33XXXX)" Actor.app/Contents/Frameworks/Actor\ Helper\ EH.app/Contents/MacOS/Actor\ Helper\ EH 
Actor.app/Contents/Frameworks/Actor Helper EH.app/Contents/MacOS/Actor Helper EH: signed Mach-O thin (x86_64) [Actor Helper EH]

codesign -v -f -s "3rd Party Mac Developer Application: Ivan Petrov (CDMQ33XXXX)" Actor.app/Contents/Frameworks/Actor\ Helper\ EH.app
Actor.app/Contents/Frameworks/Actor Helper EH.app: signed bundle [com.github.electron.helper.EH]

codesign -v -f -s "3rd Party Mac Developer Application: Ivan Petrov (CDMQ33XXXX)" Actor.app/Contents/Frameworks/Actor\ Helper\ NP.app
Actor.app/Contents/Frameworks/Actor Helper NP.app: signed bundle [com.github.electron.helper.NP]

codesign -v -f -s "3rd Party Mac Developer Application: Ivan Petrov (CDMQ33XXXX)" Actor.app/Contents/Frameworks/Mantle.framework
Actor.app/Contents/Frameworks/Mantle.framework: signed bundle with Mach-O thin (x86_64) [org.mantle.Mantle]

codesign -v -f -s "3rd Party Mac Developer Application: Ivan Petrov (CDMQ33XXXX)" Actor.app/Contents/Frameworks/ReactiveCocoa.framework
Actor.app/Contents/Frameworks/ReactiveCocoa.framework: signed bundle with Mach-O thin (x86_64) [org.reactivecocoa.ReactiveCocoa]

codesign -v -f -s "3rd Party Mac Developer Application: Ivan Petrov (CDMQ33XXXX)" Actor.app/Contents/Frameworks/Squirrel.framework
Actor.app/Contents/Frameworks/Squirrel.framework: signed bundle with Mach-O thin (x86_64) [com.github.Squirrel]

codesign -v -f -s "3rd Party Mac Developer Application: Ivan Petrov (CDMQ33XXXX)" Actor.app
Actor.app: signed bundle with Mach-O thin (x86_64) [im.actor.app]
```

As an optional step you may check the results of signing:

```
codesign -dvvv /Applications/Actor.app

Executable=/Applications/Actor.app/Contents/MacOS/Electron
[...]
Signature size=4352
Authority=3rd Party Mac Developer Application: Ivan Petrov (CDMQ33XXXX)
Authority=Apple Worldwide Developer Relations Certification Authority
Authority=Apple Root CA
Signed Time=16 февр. 2016 г., 6:29:33
[...]
```
