let obj = [
    {
        id: 1,
        title: "Category",
        children: [
            {
                id: 1,
                title: "countries",
                children: [
                    {title: "IN", id: 1},
                    {title: "TH", id: 2},
                    {title: "SG", id: 3}
                ]
            }, {
                id: 2,
                title: "fields",
                children: [
                    {title: "Finance", id: 1},
                    {title: "Services", id: 2}
                ]
            }
        ]
    }
];
let result =
    {
        label: "Category",
        value: "Category",
        children: [
            {
                label: "countries",
                value: "countries",
                children: [
                    {label: "IN", value: "IN", title: "IN"},
                    {label: "TH", value: "TH", title: "TH"},
                    {label: "SG", value: "SG", title: "SG"}
                ]
            }, {
                label: "fields",
                value: "fields",
                children: [
                    {label: "Finance", value: "Finance", title: "Finance"},
                    {label: "Services", value: "Services", title: "Services"}
                ]
            }
        ]
    };

let __f = (_) => {
    let {title, children} = _;
    const value = title;
    const label = title;
    let result;
    if (children && children.length) {
        result = {label, value, children: children.map(__f)};
    } else {
        result = {label, value, title};
    }
    return result;
};

let result = obj.map(__f).pop();

console.log(JSON.stringify(obj.map(__f).pop()) === JSON.stringify(result));
