package: build_all clean_package
	echo "Packaging the application..."
	mkdir -p website
	cp -r .output/public/* website/
	mkdir -p website/bug
	cp -r bug/dist/* website/bug/

clean_package:
	echo "Cleaning up previous builds..."
	rm -rf website

build_all: build_base
	echo "All components built."

build_base:
	echo "Building the base website..."
	npm run generate

build_bug:
	echo "Building the bug reporting system..."
	npm run build-only