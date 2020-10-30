echo "remove lerna library from package.json"
cat package.json | grep -v lerna > package.json.bak
mv package.json.bak package.json
echo "remove lerna dist from node_modules"
rm -rf node_modules/my-lerna-library
rm -rf node_modules/@my-lerna-library
echo "add sym link"
yarn link "my-lerna-library"
yarn link "@my-lerna-library/common"
yarn link "@my-lerna-library/another-package"