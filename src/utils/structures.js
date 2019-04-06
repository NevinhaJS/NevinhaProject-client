export const StatusBarStructure = {
    backgroundColor: "#6a51ae",
    textColor: "#fff",
    title: "",
    backIcon: false
}

export const TabBarStructure = {
    activeTintColor: "tomato",
    inactiveTintColor: "gray",
    size: 25,
    showLabel: false,
    backgroundColor: "#0082f3"
}

export const ScreenStructure = {
    open: true,
    layout: 'tab',
    rightScreen: false,
    navigation: true,
    mainNavigation: {
        color: '#fff',
        backgroundColor: '#0082f3'
    },
    statusBar: StatusBarStructure,
    tabBar: TabBarStructure
}