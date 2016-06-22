# mac-shell-setup-thangs
My shell junk.

## Install homebrew

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`


## Utilities

Install into `~/Documents/Utilities`

- [bashmarks](https://github.com/chriscorwin/bashmarks)
- [colorsh](git@github.com:chriscorwin/colorsh.git)
- [GitScripts](https://github.com/chriscorwin/GitScripts)
- [functionsh](https://github.com/chriscorwin/functionsh)

## Create a place for your sourced scripts to run

We will make a symlink in home to the `dot-bash_extras.d` directory in this project, and call it `.bash_extras.d_link`.

`ln -s ./dot-bash_extras.d ~/.bash_extras.d_link`

The `.bash_profile` we put into place will automagically source files and directories of files in this place (down to five levels deep!) when your bash shell is loaded.

So you can put stuff in this very project, and they'll automatically get sourced when you open a shell.

This [dot-bash_extras.d](./dot-bash_extras.d) directory already contains several files (and symlinks to things you should have installed above!):

- GitScripts-init-link -> `~/Documents/Utilities/GitScripts/_gsinit.sh`
- [aliases](./dot-bash_extras.d/aliases)
- [bash_prompt](./dot-bash_extras.d/bash_prompt)
- bashmarks-modified-link.sh -> `~/Documents/Utilities/bashmarks/bashmarks-modified.sh`
- colorsh-link -> `~/Documents/Utilities/colorsh/SOURCEME`
- [exports](./dot-bash_extras.d/exports)
- [functions](./dot-bash_extras.d/functions)
- [iterm-variables.sh](./dot-bash_extras.d/iterm-variables.sh)
- [npm-completion.sh](./dot-bash_extras.d/npm-completion.sh)

## VERY LAST THING -- replace your bash profile with a symlink to this one

Back up your existing `.bash_profile`.

`mv ~/.bash_profile  ~/.previous_bash_profile`

Make a symbolic link to `dot_bash_profile` in your home directory.

`ln -s ./dot_bash_profile ~/.bash_profile`


