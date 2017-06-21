#!/bin/bash

RED=`tput setaf 1;`;
GREEN=`tput setaf 2`;
NOCOLOR=`tput sgr0`;

for file in $(git diff --name-only --staged); do
    sass_file=$(echo $file | grep '.scss$');
    js_file=$(echo $file | grep '.jsx*$');
    if [[ ! -z $sass_file ]]; then
        lint_output=$(scss-lint $sass_file);
        if [[ ! -z $lint_output ]]; then
            echo "${file}: ${RED}needs ${RED}formatting!${NOCOLOR}";
            echo "${lint_output}";
            exit 1;
        else
            echo "${file}: ${GREEN}passed!${NOCOLOR}";
        fi
    fi
    if [[ ! -z $js_file ]]; then
        lint_output=$(./node_modules/.bin/eslint $js_file);
        if [[ ! -z $lint_output ]]; then
            echo "${file}: ${RED}needs ${RED}formatting!${NOCOLOR}";
            echo "${lint_output}";
            exit 1;
        else
            echo "${file}: ${GREEN}passed!${NOCOLOR}";
        fi
    fi
done
