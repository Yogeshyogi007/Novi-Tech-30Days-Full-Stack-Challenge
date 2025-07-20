const jobListings= [
    {title:'Web Developer', type:'fullTime', location:'City A', salary:60000},
    {title:'UX designer', type:'partTime', location:'City B', salary:40000},
];

document.addEventListener( 'DOMContentLoaded', function () {
    const jobTypeFilter=document.getElementById('jobType');
    const locationFilter=document.getElementById('location');
    const salaryFilter=document.getElementById('salary');
    const salaryValue=document.getElementById('salaryValue');
    const filterBtn=document.getElementById('filterBtn');
    const jobListingsContainer=document.getElementById('jobListings');

    renderJobListings(jobListings);

    filterBtn.addEventListener('click',function () {
        filterJobListings();
    });

    salaryFilter.addEventListener('input',function () {
        salaryValue.textContent=salaryFilter.value;
    });

    function renderJobListings(jobs){
        jobListingsContainer.innerHTML='';

        jobs.forEach(job => {
            const listingDiv=document.createElement('div');
            listingDiv.innerHTML= `<h3>${job.title}</h3><p>Type: ${job.type}</p><p>Location: ${job.location}</p><p>Salary: ${job.salary}</p>`;
            jobListingsContainer.appendChild(listingDiv);
        });
    }

    function filterJobListings() {
        const jobType =jobTypeFilter.value;
        const location=locationFilter.value.toLowerCase() ;
        const salary = parseInt(salaryFilter.value);

        const filteredJobs=jobListings.filter(job => {
            return (jobType==='all' || job.type === jobType) &&
            (job.location.toLowerCase().includes(location)) &&
            (job.salary >= salary);
        });
        renderJobListings(filteredJobs);
    }
});
