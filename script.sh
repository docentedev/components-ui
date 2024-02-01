src_dir="../hd-cl-hdc-components-ui/storybook-static"
dest_dir="./docs"

rm -rf "$dest_dir"
mkdir -p "$dest_dir"
cp -R "$src_dir/" "$dest_dir"

src_dir2="../hd-cl-hdc-components-ui/dist"
dest_dir2="./dist"

rm -rf "$dest_dir2"
mkdir -p "$dest_dir2"
cp -R "$src_dir2/" "$dest_dir2"
