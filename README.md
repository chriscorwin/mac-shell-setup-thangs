# mac-shell-setup-thangs
My shell junk.

## Install homebrew

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Then install [formulas](./brew-formulas-installed.md).


## Utilities

Install into `$HOME/Documents/Utilities`

- [bashmarks](https://github.com/chriscorwin/bashmarks)
- [colorsh](https://github.com/chriscorwin/colorsh)
- [GitScripts](https://github.com/chriscorwin/GitScripts)
- [functionsh](https://github.com/chriscorwin/functionsh)


## Create a place for your sourced scripts to run

We will make a symlink in home to the `dot-bash_extras.d` directory in this project, and call it `.bash_extras.d_link`.

`ln -s $HOME/Documents/Utilities/mac-shell-setup-thangs/dot-bash_extras.d $HOME/.bash_extras.d_link`

The `.bash_profile` we put into place will automagically source files and directories of files in this place (down to five levels deep!) when your bash shell is loaded.

So you can put stuff in this very project, and they'll automatically get sourced when you open a shell.

This [dot-bash_extras.d](./dot-bash_extras.d) directory already contains several files (and symlinks to things you should have installed above!):

- GitScripts-init-link -> `$HOME/Documents/Utilities/GitScripts/_gsinit.sh`
- [aliases](./dot-bash_extras.d/aliases)
- [bash_prompt](./dot-bash_extras.d/bash_prompt)
- bashmarks-modified-link.sh -> `$HOME/Documents/Utilities/bashmarks/bashmarks-modified.sh`
- colorsh-link -> `$HOME/Documents/Utilities/colorsh/SOURCEME`
- [exports](./dot-bash_extras.d/exports)
- [functions](./dot-bash_extras.d/functions)
- [iterm-variables.sh](./dot-bash_extras.d/iterm-variables.sh)
- [npm-completion.sh](./dot-bash_extras.d/npm-completion.sh)


## Replace your `$HOME/bin` with a symlink to `./bin.d`

Back up your existing `bin/` directory.

`mv $HOME/bin  $HOME/previous_bin`

Make a symbolic link to `bin.d/` in your home directory.

`ln -s $HOME/Documents/Utilities/mac-shell-setup-thangs/bin.d $HOME/bin`

:dancer: Don't forget to check on ownership and `+x` type permissions!



## VERY LAST THING -- replace your bash profile with a symlink to this one

Back up your existing `.bash_profile`.

`mv $HOME/.bash_profile  $HOME/.previous_bash_profile`

Make a symbolic link to `dot_bash_profile` in your home directory.

`ln -s $HOME/Documents/Utilities/mac-shell-setup-thangs/dot_bash_profile $HOME/.bash_profile`


