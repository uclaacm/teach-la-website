---
title: "data types"
next_lesson: operators
next_link: 02-operators
group: "fundamentals"
num: 1
video_link: "https://www.youtube.com/embed/eeoSWdtRdbE"
slides_link: "https://docs.google.com/presentation/d/179oCvb_tWnnJ4tVHHW7HvRDsYbhSyxhuKSBvVVW2Q5s/edit?usp=sharing"
worksheet_link: "https://docs.google.com/document/d/19ymRkXJ6bXDYBJHHWjFr5FJJLI6Lphs4TjGUitYYF8A/edit?usp=sharing"
length: 14
agenda: 
    - text: "what are data types?"
    - text: "practice with different data types"
    - text: "casting"
practice:
    - problem: 
        num: 1
        question: >
          What data types would the following data be?


          a) 32

          b) 4.5

          c) "hello!"

          d) True

          e) "9"

          f) str(12.3)
        solution: >
          a) int

          b) float

          c) string

          d) boolean

          e) string

          f) string
    - problem: 
        num: 2
        question: >
          What will be the output of the following code?


          `print(bool(1))`

          `print(float(32))`

          `print(int(False))`

          `print(float(int(False)))`

          `print(bool(int(0.5)))`

        solution: >
          True

          32.0

          0

          2.0

          False

---
Data is at the core of everything we do in Python! Essentially, data is just a **collection of information** which may include numbers, words, or phrases. We use it to tell our computer **what** we want and **how** we want it. 

In this video, we'll be going over 4 basic data types in Python: booleans, integers, floats, and strings. We'll also cover type casting. 

Don't worry if any of that sounds foreign to you! By the end of this video, you'll be an expert!