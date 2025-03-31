import React, { useState } from 'react';
import Button from '../components/button';

const ApplyPage = () => {
  const [applicationType, setApplicationType] = useState('ngo'); // 'ngo' or 'project'
  const [formData, setFormData] = useState({
    // Common fields
    name: '',
    email: '',
    phone: '',
    description: '',
    
    // NGO specific fields
    organization: '',
    registrationNumber: '',
    foundedYear: '',
    website: '',
    country: '',
    causes: [],
    
    // Project specific fields
    projectTitle: '',
    fundingGoal: '',
    timeline: '',
    impact: '',
    team: '',
    ngoAffiliation: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Available causes for NGOs to select
  const availableCauses = [
    'Education', 'Healthcare', 'Environment', 'Poverty', 
    'Human Rights', 'Animal Welfare', 'Disaster Relief', 'Community Development'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCauseSelection = (cause) => {
    const updatedCauses = formData.causes.includes(cause)
      ? formData.causes.filter(item => item !== cause)
      : [...formData.causes, cause];
    
    setFormData({
      ...formData,
      causes: updatedCauses
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would implement the actual API call to send the application data
      // For demonstration, using a timeout to simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Application submitted:', { type: applicationType, data: formData });
      setSubmitSuccess(true);
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        description: '',
        organization: '',
        registrationNumber: '',
        foundedYear: '',
        website: '',
        country: '',
        causes: [],
        projectTitle: '',
        fundingGoal: '',
        timeline: '',
        impact: '',
        team: '',
        ngoAffiliation: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Apply to Join
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            {applicationType === 'ngo' 
              ? 'Register your NGO to receive crypto donations through our platform.' 
              : 'Submit your project for funding through our platform.'}
          </p>
        </div>

        {/* Application Type Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setApplicationType('ngo')}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                applicationType === 'ngo'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Register as NGO
            </button>
            <button
              type="button"
              onClick={() => setApplicationType('project')}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                applicationType === 'project'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Submit a Project
            </button>
          </div>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="mb-8 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">Your application has been submitted successfully! We'll review it and contact you soon.</span>
          </div>
        )}

        {/* Application Form */}
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <form onSubmit={handleSubmit} className="p-6">
            {/* Common Fields */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Basic Information
              </h2>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    {applicationType === 'ngo' ? 'Contact Person Name' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* NGO-specific Fields */}
            {applicationType === 'ngo' && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Organization Details
                </h2>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      name="organization"
                      id="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700">
                      Registration Number
                    </label>
                    <input
                      type="text"
                      name="registrationNumber"
                      id="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="foundedYear" className="block text-sm font-medium text-gray-700">
                      Year Founded
                    </label>
                    <input
                      type="number"
                      name="foundedYear"
                      id="foundedYear"
                      min="1800"
                      max="2025"
                      value={formData.foundedYear}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      id="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Country of Operation
                    </label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Focus Areas/Causes (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {availableCauses.map((cause) => (
                      <div key={cause} className="flex items-center">
                        <input
                          id={`cause-${cause}`}
                          name="causes"
                          type="checkbox"
                          checked={formData.causes.includes(cause)}
                          onChange={() => handleCauseSelection(cause)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`cause-${cause}`} className="ml-2 text-sm text-gray-700">
                          {cause}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Project-specific Fields */}
            {applicationType === 'project' && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Project Details
                </h2>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700">
                      Project Title
                    </label>
                    <input
                      type="text"
                      name="projectTitle"
                      id="projectTitle"
                      value={formData.projectTitle}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="fundingGoal" className="block text-sm font-medium text-gray-700">
                      Funding Goal (USD)
                    </label>
                    <input
                      type="number"
                      name="fundingGoal"
                      id="fundingGoal"
                      min="0"
                      step="100"
                      value={formData.fundingGoal}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
                      Project Timeline
                    </label>
                    <input
                      type="text"
                      name="timeline"
                      id="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      placeholder="e.g., 3 months, 1 year"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="ngoAffiliation" className="block text-sm font-medium text-gray-700">
                      NGO Affiliation (if any)
                    </label>
                    <input
                      type="text"
                      name="ngoAffiliation"
                      id="ngoAffiliation"
                      value={formData.ngoAffiliation}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="team" className="block text-sm font-medium text-gray-700">
                    Project Team/Members
                  </label>
                  <textarea
                    name="team"
                    id="team"
                    rows="3"
                    value={formData.team}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please list key team members and their roles"
                  ></textarea>
                </div>
                
                <div className="mt-6">
                  <label htmlFor="impact" className="block text-sm font-medium text-gray-700">
                    Expected Impact
                  </label>
                  <textarea
                    name="impact"
                    id="impact"
                    rows="3"
                    value={formData.impact}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe how your project will create positive impact"
                  ></textarea>
                </div>
              </div>
            )}

            {/* Common Description Field */}
            <div className="mb-8">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                {applicationType === 'ngo' ? 'Organization Description' : 'Project Description'}
              </label>
              <textarea
                name="description"
                id="description"
                rows="6"
                value={formData.description}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder={applicationType === 'ngo' 
                  ? "Please describe your organization's mission, activities, and how you plan to use cryptocurrency donations."
                  : "Please describe your project, its goals, and how funding will be utilized."}
              ></textarea>
            </div>

            <div className="flex justify-center">
              <Button 
                type="submit"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>By submitting this application, you agree to our terms and conditions. We'll review your submission and get back to you within 5-7 business days.</p>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;