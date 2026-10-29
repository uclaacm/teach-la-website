'use client';

import { useCallback, useEffect, useState } from 'react';
import { fetchClasses } from '@/services/api';
// we will see if these types are necessary in the architecture
// import { IUser, IClass } from '@/types';

export default function ClassesPage() {
    // fix the typing on this later
    const [classes, setClasses] = useState<any[]>([]);
    
    const [name, setName] = useState<string>();
    const [shortTitle, setShortTitle] = useState<string>();
    const [blurb, setBlurb] = useState<string>();
    const [imagePath, setImagePath] = useState<string>();
    const [tags, setTags] = useState<string[]>(); 
    const [classPagePath, setClassPagePath] = useState<string>();
    const [githubRepoLink, setGithubRepoLink] = useState<string>();
    // some unique identifier, maybe the email or we can use usernames
    const [teachers, setTeachers] = useState<string[]>();
    const [dates, setDates] = useState<string[]>();
    const [isPublic, setIsPublic] = useState<boolean>(false);

    const clearForm = useCallback(() => {
        setName('');
        setShortTitle('');
        setBlurb('');
        setImagePath('');
        setTags([]);
        setClassPagePath('');
        setGithubRepoLink('');
        setTeachers([]);
        setDates([]);
        setIsPublic(false);
    }, []);


    

    useEffect(() => {
        const loadClasses = async () => {
            const data = await fetchClasses();

            if(data) setClasses(data);
        }
        loadClasses();
    }, []);

    const handleCreateClass = async (e: React.SubmitEvent) => {
        console.log("BUTTON WAS CLICKED");
        e.preventDefault();

        try {
            const response = await fetch('/api/classes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name,
                    shortTitle,
                    blurb,
                    imagePath,
                    tags,
                    classPagePath,
                    githubRepoLink,
                    teachers,
                    dates: dates?.map(d => new Date(d)),
                    isPublic
                })
            });
            if (response.ok) {
                clearForm();
                await fetchClasses();
            } else {
                console.error("Failed to create class");
            }
        } catch (error) {
            console.error("Error:  ", error);
        }
    }


    return (
    <div className="classes-page-container">
      {/* --- CLASS LIST SECTION --- */}
      <section className="classes-list-section">
        <h2>All Classes</h2>
        {classes.length === 0 ? (
          <p>No classes found.</p>
        ) : (
          <ul>
            {classes.map((c, index) => (
              <li key={c._id || index}>
                <h3>{c.name} {c.isPublic && "🌍"}</h3>
                <p><strong>Short Title:</strong> {c.shortTitle}</p>
                <p>{c.blurb}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <hr />

      {/* --- CREATE CLASS FORM SECTION --- */}
      <section className="create-class-section">
        <h2>Create New Class</h2>
        
        <form onSubmit={handleCreateClass} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
          
          <label>
            Class Name:
            <input 
              type="text" 
              value={name || ""} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>

          <label>
            Short Title:
            <input 
              type="text" 
              value={shortTitle || ""} 
              onChange={(e) => setShortTitle(e.target.value)} 
              required
            />
          </label>

          <label>
            Blurb:
            <textarea 
              value={blurb || ""} 
              onChange={(e) => setBlurb(e.target.value)} 
              rows={4}
            />
          </label>

          <label>
            Image Path / URL:
            <input 
              type="text" 
              value={imagePath || ""} 
              onChange={(e) => setImagePath(e.target.value)} 
            />
          </label>

          <label>
            Tags (comma separated):
            <input 
              type="text" 
              value={tags ? tags.join(", ") : ""} 
              onChange={(e) => setTags(e.target.value.split(",").map(tag => tag.trim()))} 
              placeholder="react, webdev, beginner"
            />
          </label>

          <label>
            Class Page Path:
            <input 
              type="text" 
              value={classPagePath || ""} 
              onChange={(e) => setClassPagePath(e.target.value)} 
              placeholder="/classes/react-101"
            />
          </label>

          <label>
            GitHub Repo Link:
            <input 
              type="url" 
              value={githubRepoLink || ""} 
              onChange={(e) => setGithubRepoLink(e.target.value)} 
              placeholder="https://github.com/..."
            />
          </label>

          <label>
            Teachers (comma separated usernames/emails):
            <input 
              type="text" 
              value={teachers ? teachers.join(", ") : ""} 
              onChange={(e) => setTeachers(e.target.value.split(",").map(t => t.trim()))} 
              placeholder="alice@test.com, bob_admin"
            />
          </label>

          <label>
            Dates (comma separated):
            <input 
              type="text" 
              value={dates ? dates.join(", ") : ""} 
              onChange={(e) => setDates(e.target.value.split(",").map(d => d.trim()))} 
              placeholder="2026-10-15, 2026-10-22"
            />
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input 
              type="checkbox" 
              checked={isPublic} 
              onChange={(e) => setIsPublic(e.target.checked)} 
            />
            Make this class public
          </label>

          <button type="submit">Submit Class</button>
        </form>
      </section>
    </div>
  ); 

}