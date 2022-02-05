# Setup tmuxinator

## Mac

1. Install tmux. Can be performed with brew by running `brew install tmux`
2. Update your tmux config to enable mouse reporting: `echo 'set -g mouse on' >> $HOME/.tmux.conf`
3. Create a new session config file: `tmux new cyclee`
4. Edit that file located at `~/.tmuxinator/cyclee.yml` and paste the [following config](#config)
   - You may need to change the project root path depending on your setup

To launch your personnalized tmux session, simply type `tmuxinator cyclee` anywhere in your command prompt

## Windows

You need WSL

1. Install tmux following [these steps](https://codeandkeep.com/Tmux-on-Windows/)
2. Edit your tmux config file and add the line `set -g mouse on` to enable mouse reporting
3. Create a new session config file: `tmux new cyclee`
4. Edit that file located at `~/.tmuxinator/cyclee.yml` and paste the [following config](#config)
   - You may need to change the project root path depending on your setup

To launch your personnalized tmux session, simply type `tmuxinator cyclee` anywhere in your WSL command prompt

## Config

```
# ~/.tmuxinator/cyclee.yml

name: cyclee
root: ~/Documents/Cyclee/cyclee

windows:
  - 🐳 root:
      panes:
        -
        -
  - 👾 hasura:
      panes:
        - docker compose up --build graphql-engine
        - docker compose up hasura-console
  - 🔥 backend:
      panes:
        - cd backend
  - 🎾 frontend:
      panes:
        - development server:
          - cd frontend
          - yarn next dev
        - cd frontend
```
