if ! npm list -g --depth=0 electron-packager &> /dev/null ; then 
	echo "installing electron-packager"
	npm i electron-packager -g
fi 

mkdir build
mkdir build/out

echo "Building OSX"

electron-packager src Actor --platform=darwin --arch=x64 --app-bundle-id=im.actor.app --version=0.36.0 --out=build --icon=icon/osx.icns

cd build/Actor-darwin-x64/



zip --symlinks -r Actor-Mac.zip Actor.app/
mv Actor-Mac.zip ../out/
cd ../../

echo "Building Windows"

electron-packager src Actor --platform=win32 --arch=all --app-bundle-id=im.actor.app --version=0.36.0 --out=build --icon=icon/windows.icns

cd build
zip --symlinks -r Actor-Win-x86.zip Actor-win32-ia32/
mv Actor-Win-x86.zip out/

zip --symlinks -r Actor-Win-x64.zip Actor-win32-x64/
mv Actor-Win-x64.zip out/
cd ../

echo "Building Linux"
electron-packager src Actor --platform=linux --arch=all --app-bundle-id=im.actor.app --version=0.36.0 --out=build

cd build
zip --symlinks -r Actor-Linux-x86.zip Actor-linux-ia32/
mv Actor-Linux-x86.zip out/

zip --symlinks -r Actor-Linux-x64.zip Actor-linux-x64/
mv Actor-Linux-x64.zip out/
cd ../