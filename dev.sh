echo "overmind start"
overmind start
# https://github.com/DarthSim/overmind

# Overmind assigns the port base (5000 by default) to PORT for the first process and increases PORT by port step (100 by default) for each subsequent one. You can specify the port base and port step like this:

# $ overmind start -p 3000 -P 10
# $ OVERMIND_PORT=3000 OVERMIND_PORT_STEP=10 overmind start