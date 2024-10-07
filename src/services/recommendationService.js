const jobPostings = [
    // Mock job data...
];

const calculateMatchScore = (userProfile, jobPosting) => {
    const skillsIntersection = jobPosting.required_skills.filter(skill => userProfile.skills.includes(skill));
    const skillMatch = skillsIntersection.length / jobPosting.required_skills.length;

    const experienceMatch = userProfile.experience_level === jobPosting.experience_level ? 1 : 0;
    const locationMatch = userProfile.preferences.locations.includes(jobPosting.location) ? 1 : 0;
    const roleMatch = userProfile.preferences.desired_roles.includes(jobPosting.job_title) ? 1 : 0;

    return (skillMatch * 0.5) + (experienceMatch * 0.2) + (locationMatch * 0.2) + (roleMatch * 0.1);
};

const recommendJobs = (userProfile) => {
    const recommendations = jobPostings
        .map(job => {
            const score = calculateMatchScore(userProfile, job);
            return { job, score };
        })
        .filter(recommendation => recommendation.score > 0.5) // Set your threshold here
        .sort((a, b) => b.score - a.score) // Sort by best match
        .map(recommendation => recommendation.job);
    
    return recommendations;
};

module.exports = { recommendJobs };
