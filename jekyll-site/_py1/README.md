## Creating Lesson Pages

Lesson pages may use the following data:

```md
---
title: "Lesson Title"
next_lesson: "Next Lesson Title" 
next_link: next lesson link
group: "Lesson Group"
num: "Lesson Number"
video_link: "Video link" #note: must be a youtube embed link
slides_link: "Slides Link"
worksheet_link: "worksheet link"
length: "x"
agenda: 
    - text: "first point"
    - text: "next point"
    - test: "third point" 
assignment: "assignment link"
practice: 
    - problem:
        num: 1 
        question: "a question"
        solution: "a solution"
    - problem:
        num: 2 
        question: "a question"
        solution: "a solution"
---
```

## Descriptions

- title: The name of the lesson
- next_lesson: title of next lesson
- next_link: link to next lesson
- group: the group of the lesson i.e. fundamentals or control flow etc.
- num: lesson number indicates recommended order of completion
- length: time required to watch video and complete associated problems
- agenda: an array of agenda items
- assignment: only include if the lesson is an assignment; for now a link to the problem, **TODO**: interactive questions
- practice: an array of problems
    num: problem number
    question:  written in markdown
    solution: writen in markdown

Content:  long description of lesson to show on lesson page