import React from 'react';

export default function SingleTask({task}) {
    return (
        <>
            <h1>
                {task.title}
            </h1>
            <p>
                {task.description}
            </p>
        </>
    )
}

export async function getStaticProps({params}) {
    const {id} = params;
    const res = await fetch(`https://nztodo.herokuapp.com/api/task/${id}/?format=json`);
    const task = await res.json();
    return {
        props: {
            task
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
    const tasks = await res.json();
    return {
        paths: tasks.map(({ id }) => {
            return {
                params: {
                    id: id.toString()
                }
            }
        }),
        fallback: false
    }
}