interface IStack {
    language: string
    stacks: string[]
}

const STACKS: IStack[] = [
    {
        language: 'Python',
        stacks: [
            'Flask',
            'Django',
            'FastApi',
            'Bottle',
        ]
    },
    {
        language: 'Javascript',
        stacks: [
            'React js',
            'Node js',
            'Next js',
            'Nest js',
        ]
    },
    {
        language: 'Kotlin',
        stacks: [
            'Android',
        ]
    }
]
export default STACKS;