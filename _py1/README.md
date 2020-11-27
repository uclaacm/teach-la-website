## Creating Lesson Pages

Lesson pages may use the following data:

```md
---
title: "Lesson Title"
next_lesson: "Next Lesson Title" #note: for some reason just calling this next doesn't work? Was going out of my mind trying to solve for an hour, thanks Jekyll!
next_link: next lesson link
group: "Lesson Group"
num: "Lesson Number"
video_link: "Video link"
slides_link: "Slides Link"
worksheet_link: "worksheet link"
length: "x"
agenda: brief agenda HTML
assignment: "assignment link"
p1: 
    question: "a question"
    solution: link to html solution
---
```

## Descriptions

- title: The name of the lesson
- next_lesson: title of next lesson
- next_link: link to next lesson
- group: the group of the lesson i.e. fundamentals or control flow etc.
- num: lesson number indicates recommended order of completion
- length: time required to watch video and complete associated problems
- agenda: Brief bulleted agenda to display on curriculum page in HTML
- assignment: only include if the lesson is an assignment; for now a link to the problem, **TODO**: interactive questions
- p1,p2,p3: a set of questions and solutions; up to 3 problems allowed per page

Content:  long description of lesson to show on lesson page