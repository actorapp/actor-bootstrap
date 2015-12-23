#!/bin/bash
git clone git://github.com/ansible/ansible.git --recursive
cd ansible && source ./hacking/env-setup && cd -
./ansible/bin/ansible-galaxy install -r requirements.yml
./ansible/bin/ansible-playbook docker.yml
