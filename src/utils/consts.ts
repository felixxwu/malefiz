export const consts = {
    userCollection: 'users',
    localStoreUserIdKey: 'userId',
    playerPieceAttributeName: 'player-piece',
    gridSize: 100,
    primaryBg: '#6667ab',
    get lineWidth() {
        return this.gridSize / 20
    },
    get pointSize() {
        return this.gridSize / 4
    },
}
