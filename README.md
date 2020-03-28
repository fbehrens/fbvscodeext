# fbvscodeext README

```bash
# https://blog.nojaf.com/2018/12/17/writing-a-vscode-extension-with-fable-2-1/

npm add --save-dev "fable-compiler" "fable-splitter"

# create Project
dotnet new classlib -lang F# -o src -n fbVsCodeExt  

#now i can build with 
npm run build


# add npm modules 
npm add --save-dev "@babel/plugin-transform-modules-commonjs" "@babel/core"

paket init
# edit paket.dependencies
# create paket.references
paket install

# Paket version 5.242.2
# Downloading nojaf/fable-jest:60b934633faac4222683a097e73a59dec306543b fable/Bindings.fs to C:\Users\fb\code\kata\fbvscodeext\paket-files\nojaf\fable-jest\fable\Bindings.fs
# Downloading nojaf/fable-jest:60b934633faac4222683a097e73a59dec306543b fable/Exports.fs to C:\Users\fb\code\kata\fbvscodeext\paket-files\nojaf\fable-jest\fable\Exports.fs
# Downloading nojaf/fable-jest:60b934633faac4222683a097e73a59dec306543b fable/Matchers.fs to C:\Users\fb\code\kata\fbvscodeext\paket-files\nojaf\fable-jest\fable\Matchers.fs

npm add --seve-dev "jest" "markdown-it"
```
