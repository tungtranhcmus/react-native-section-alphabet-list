Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var sizes = {
    containerWidth: 10,
    itemHeight: 15,
    itemFontSize: 10,
};
exports.styles = react_native_1.StyleSheet.create({
    letterIndexContainer: {
        width: sizes.containerWidth,
        height: "100%",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
    },
    letterIndexList: {
        // height: "100%",
    },
    letterIndexItem: {
        width: sizes.containerWidth,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 3
    },
    letterIndexLabel: {
        fontSize: sizes.itemFontSize,
        color: "grey",
    },
});
