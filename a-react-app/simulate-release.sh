echo "add lerna library in package.json"
while IFS= read -r line
do
    if [[ "$line" =~ dependencies ]]
    then
        echo "$line"
        echo "    \"my-lerna-library\": \"1.0.0\","
        echo "    \"@my-lerna-library/common\": \"1.0.0\","
        echo "    \"@my-lerna-library/another-package\": \"1.0.0\","
    else
        echo "$line"
    fi
done < package.json > package.json.bak
mv package.json.bak package.json
echo "remove sym link"
yarn unlink "my-lerna-library"
yarn unlink "@my-lerna-library/common"
yarn unlink "@my-lerna-library/another-package"
echo "copy lerna dist in node_modules"
mkdir -p node_modules/my-lerna-library
cp ../my-lerna-library/packages/core/package.json node_modules/my-lerna-library
cp -r ../my-lerna-library/packages/core/dist node_modules/my-lerna-library
mkdir -p node_modules/@my-lerna-library/common
cp ../my-lerna-library/packages/common/package.json node_modules/@my-lerna-library/common
cp -r ../my-lerna-library/packages/common/dist node_modules/@my-lerna-library/common
mkdir -p node_modules/@my-lerna-library/another-package
cp ../my-lerna-library/packages/another-package/package.json node_modules/@my-lerna-library/another-package
cp -r ../my-lerna-library/packages/another-package/dist node_modules/@my-lerna-library/another-package
