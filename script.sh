src_dir_base="hd-cl-hdc-components-ui"
dest_dir_base="doc-components-ui"
src_dir="../$src_dir_base/storybook-static"
dest_dir="./docs"

cd ..
cd $src_dir_base

current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" != "master" ]; then
  echo "Error: No estás en la rama master. Por favor, cambia a la rama master antes de ejecutar este script."
  exit 1
fi
git reset --hard HEAD
git pull origin master --no-rebase 

npm run build-storybook
cd ..

echo "CURRENT DIR: $(pwd) - cd $src_dir_base"
cd "$dest_dir_base"

rm -rf "$dest_dir"
mkdir -p "$dest_dir"

echo "CURRENT DIR: $(pwd) - cp -R $src_dir/ $dest_dir"

cp -R "$src_dir/" "$dest_dir"

git status
git add .
# message commit include datetime
git commit -m "Deployed at $(date)"
git push origin main