src_dir="../hd-cl-hdc-components-ui/storybook-static"
dest_dir="./storybook-static"

rm -rf "$dest_dir"
mkdir -p "$dest_dir"
cp -R "$src_dir/" "$dest_dir"
