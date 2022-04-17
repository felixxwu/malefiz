export const consts = {
    userCollection: 'users',
    localStoreUserIdKey: 'userId',
    playerPieceAttributeName: 'player-piece',
    gridSize: 50,
    primaryBg: '#6667ab',
    primaryBgDark: '#464673',
    distanceToCancelPieceDrop: 0.5,
    get lineWidth() {
        return this.gridSize / 20
    },
    get pointSize() {
        return this.gridSize / 4
    },
    pageNotFoundFontSize: 20,
}
