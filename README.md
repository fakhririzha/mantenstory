# Mantenstory

How to develop?
- **ONLY** develop ON `develop` branch!
- Use local MySQL with XAMPP (you can export from the hosting and then import to your local to get latest update)
- You **CAN'T USE** remote MySQL server on Rumahweb otherwise your IP will get blocked

After submitting a new commit, what should I do?
- Change your active branch to `latest_deploy` and run `git pull origin develop` from the `latest_deploy` branch

How to deploy to Rumahweb hosting?
- First, you need to build the application. You can see that if you change the branch from `develop` to `latest_deploy` it will have different auth in `app.config.js`
- You have to make sure to get latest code before build, so run `git pull origin develop` first
- And then, you can run `yarn clean` to make a fresh `.next` folders
- After that, you can run `yarn build`
- Please be note that build process may take a lot of time depending on your system spesification. Better hardware is faster build time.
- After build process is completed, you can watch [click this link.](https://www.youtube.com/watch?v=lex3qZAf_Ok&list=WL&index=7)
- If you still need assistance you can email me at [mr.fakhririzhaa@gmail.com](mailto:fakhri.rizha@sirclo.com)
