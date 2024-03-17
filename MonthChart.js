 const monthlyActivities = [
    {
        id: 1,
        activity: "create project file which contains tables between 12 to 19",
        subject: "Maths"
    },
    {
        id: 2,
        activity: " Complete 1-5 lab activity",
        subject: "science"
    },
    {
        id: 3,
        activity: "Solve the 1-5 Assignment",
        subject: "English"
    },
    {
        id: 3,
        activity: "complete the 1 to 4 Assignment",
        subject: "Hindi"
    },
    {
        id: 3,
        activity: "practice one sports",
        subject: "Sports"
    },
  ];

  function showMonthlyActivities() {
    const monthlyActivitiesDiv = document.getElementById('month');
    const activityList = document.getElementById('activity');
    const subjectSelect = document.getElementById('subject');
    const selectedSubject = subjectSelect.value;
    
   
    activityList.innerHTML = '';

   
    const Activities = monthlyActivities.filter(activity => activity.subject === selectedSubject);

   
    if (Activities.length > 0) {
      monthlyActivitiesDiv.style.display = 'block';
      Activities.forEach(activity => {
        const listItem = document.createElement('li');
        listItem.textContent = activity.activity;
        activityList.appendChild(listItem);
      });
    } else {
     
      alert("Activitie not found..");
    }
  }
