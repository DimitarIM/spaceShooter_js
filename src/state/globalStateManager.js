export const statePropsEnum = {
    playerHP: "playerHp",
};

function initStateManager() {
    const state = {
        playerHp: 3,
        maxPlayerHP: 3
    }

    return {
        current() {
            return { ...state};
        },
        set(property, value) {
            state[property] = value;
        }
    }
}

export const state = initStateManager();