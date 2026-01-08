#
# ~/.bashrc
#

# If not running interactively, don't do anything
#[[ $- != *i* ]] && return

# Ble.sh thing
[[ $- == *i* ]] && source -- /usr/share/blesh/ble.sh --attach=none

alias ls='ls --color=auto'
alias grep='grep --color=auto'

#####################################################
# Prompt customization                              #
#####################################################

# Only show the hostname for remote clients
#ssh_ip=`echo $SSH_CLIENT | awk '{ print $1 }'`
#ssh2_ip=`echo $SSH2_CLIENT | awk '{ print $1 }'`

# Print the exit status, format it as red when != 0
#exitstatus()
#{
#   if [[ $? == 0 ]]; then
#      echo $?
#   else
#      echo -e "\e[91m$?\e[0m"
#   fi
#}

# Actually set the prompt lol
#PROMPT_COMMAND='PS1_CMD1=$(if [ $ssh2_ip ] || [ $ssh_ip ] ; then echo "@$(uname -n)"; fi)'
#PS1='\[\e[106m\] \@ \[\e[94m\]\[\e[0;104m\] \u${PS1_CMD1} \[\e[90m\]\[\e[0;100m\] \W \[\e[0;90m\]\[\e[0m\] $(exitstatus) \$ '

# Copy-paste aliases (needs xclip installed)
# To copy, pipe the command to `copy`.
# Like this: echo 'Text to be copied' | copy
# To paste directly into the command, direct the output of `paste` into the command.
# Like this: echo < paste
alias copy="xclip -sel clip"
alias paste="xclip -sel clip -o"

# Starship prompt
eval "$(starship init bash)"

# blesh
[[ ! ${BLE_VERSION-} ]] || ble-attach


# all the environment variables in the world
ANV_DEBUG=video-decode,video-encode
