#!/usr/bin/env bash

  if [ ${#} -lt 2 ] ; then
  {
    echo "${0} Generates one solid file from project

      1st argument missing - __task_file__   will read this file
      2nd argument missing - __target_file__ use _

      Sample:

       $0 task_01  step_1_try_1    will generate task_01_step_1_try_1.erb
       $0 task_01  step_1_try_2    will generate task_01_step_1_try_2.erb
       $0 task_02  step_1_try_1    will generate task_02_step_2_try_1.erb

    "
    exit 1
  }
  fi
function do_flat() {

  local _header="$(<${1})"
  local _target="${1}_${2}.erb"
  local _one  _errors  _content _source _left _right _localfilename
  local _list="$(oe .erb | ohne 'config.|db.|layouts.|.keep|test.|tmp.|rails_helper.|spec_helper.|task_._step_._try' |  uniq)"
  echo -e "# Task:-----\n" > "${_target}"
  echo -e "${_header}" >> "${_target}"
  while read -r _one ; do
  {
    if [[ -z ${_one} ]] ; then
    {
      continue
    }
    fi
    if [[ ! -e "${_one}" ]] ; then
    {
      _errors="${_errors}\n${_one}"
      continue
    }
    fi
    _content="$(<"${_one}")"
    echo -e "<% #file:${_one}\n${_content}\n" >> "${_target}"
  }
  done <<< "${_list}"
}


if [[ ! -e "${1}" ]] ; then
{
  echo "Error:File does not exist:${1}"
  exit  1
}
fi

msg="$(do_flat "${1}" "${2}" 2>&1 ) "
_err=$?
if [[ -z ${msg} ]] ; then
{
  echo "Error:There were Errors:$? ${msg}"
  exit  1
}
else
{
  echo "No Errors:
${1}_${2}.erb"
}
fi
