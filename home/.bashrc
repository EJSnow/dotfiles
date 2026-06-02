#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

# Initialize ble.sh
[[ $- == *i* ]] && source -- /usr/share/blesh/ble.sh --attach=none

alias ls='ls --color=auto'
alias grep='grep --color=auto'

# Starship prompt
eval "$(starship init bash)"

# start ble.sh
[[ ! ${BLE_VERSION-} ]] || ble-attach
