# * See here for image contents
# * https://github.com/microsoft/vscode-dev-containers/tree/v0.140.1/containers/typescript-node/.devcontainer/base.Dockerfile

ARG VARIANT=${VARIANT:-"16-buster"}
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

ARG USERNAME=${USERNAME:-"node"}
ARG USER_UID=${USERNAME:-"2000"}
ARG USER_GID=${USER_UID}

ARG INSTALL_ZSH="true"
ARG ENABLE_NONROOT_DOCKER="true"
# * Upgrade OS packages to their latest versions
ARG UPGRADE_PACKAGES="false"
# * Use the OSS Moby CLI instead of the licensed Docker CLI
ARG USE_MOBY="true"

ARG SOURCE_SOCKET=/var/run/docker-host.sock
ARG TARGET_SOCKET=/var/run/docker.sock

ARG COMMON_DEBIAN_URL=https://raw.githubusercontent.com/microsoft/vscode-dev-containers/master/script-library/common-debian.sh
ARG DOCKER_DEBIAN_URL=https://raw.githubusercontent.com/microsoft/vscode-dev-containers/master/script-library/docker-debian.sh

RUN curl ${COMMON_DEBIAN_URL} -sSf | bash -s -- "${INSTALL_ZSH}" "${USERNAME}" "${USER_UID}" "${USER_GID}" "${UPGRADE_PACKAGES}" "true" "true" \
  # * Use Docker script from script library to set things up
  && curl ${DOCKER_DEBIAN_URL} -sSf | bash -s -- "${ENABLE_NONROOT_DOCKER}" "${SOURCE_SOCKET}" "${TARGET_SOCKET}" "${USERNAME}" "${USE_MOBY}" \
  # * Clean up
  && apt autoremove -y \
  && apt clean -y \
  && rm -rf /var/lib/apt/lists/*

USER ${USERNAME}

# * Avoiding extension reinstalls on container rebuild
RUN mkdir -p /home/${USERNAME}/.vscode-server/extensions

# * Persist zsh history between runs
RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/home/${USERNAME}/commandhistory/.zsh_history" \
  && mkdir -p /home/${USERNAME}/commandhistory \
  && touch /home/${USERNAME}/commandhistory/.zsh_history \
  && echo ${SNIPPET} >> "/home/${USERNAME}/.zshrc"

ARG WORKING_DIR=/workspaces/issues-must-close
WORKDIR ${WORKING_DIR}

ENTRYPOINT [ "/usr/local/share/docker-init.sh" ]
CMD [ "sleep", "infinity" ]
