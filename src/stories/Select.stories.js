import {Select} from './Select';
export default {
    title: 'Example/Select',
    component: Select,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ margin: '3em' }}>
                <Story />
            </div>
        )
    ]
}

export const Select01 = {
    args: {
        title: '통신사 : ',
        values : ['skt', 'kt', 'uplus', 'skt2', 'kt2', 'uplus2'],
        names : ['SKT', 'KT', '유플러스', '알뜰폰SKT', '알뜰폰KT', '알뜰폰유플러스'],
        onChange : (e) => {console.log(e)}
    }
}

export const Select02 = {
    args: {
        title: '성별 : ',
        values : ['male', 'female'],
        names : ['남자', '여자'],
        onChange : () => {}
    }
}