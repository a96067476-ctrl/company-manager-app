// Wait until the HTML page completely loads
document.addEventListener('DOMContentLoaded', () => {
    const companySelect = document.getElementById('companySelect');

        // 1. Check if we already have a saved company from last time
            const savedCompany = localStorage.getItem('activeCompany');
                if (savedCompany) {
                        companySelect.value = savedCompany;
                                updateDashboard(savedCompany);
                                    } else {
                                            // If first time opening, default to whatever is selected
                                                    updateDashboard(companySelect.value);
                                                        }

                                                            // 2. Listen for when the user changes the dropdown selection
                                                                companySelect.addEventListener('change', (event) => {
                                                                        const selectedCompany = event.target.value;
                                                                                
                                                                                        // Save choice in tablet browser memory
                                                                                                localStorage.setItem('activeCompany', selectedCompany);
                                                                                                        
                                                                                                                // Update the view
                                                                                                                        updateDashboard(selectedCompany);
                                                                                                                            });
                                                                                                                            });

                                                                                                                            // 3. Helper function to change the text based on selected company
                                                                                                                            function updateDashboard(companyId) {
                                                                                                                                console.log("Switching data view to:", companyId);
                                                                                                                                    
                                                                                                                                        // For now, we will just update a placeholder text area
                                                                                                                                            const mainContainer = document.querySelector('main');
                                                                                                                                                // In future steps, this function will pull specific company data from your database!
                                                                                                                                                }
                                                                                                                          // 4. Handle Form Submissions
                                                                                                                          document.addEventListener('DOMContentLoaded', () => {

                                                                                                                                  // Financial Form Handler
                                                                                                                                      document.getElementById('financeForm').addEventListener('submit', (e) => {
                                                                                                                                              e.preventDefault(); // Prevents the page from reloading
                                                                                                                                                      const activeCompany = localStorage.getItem('activeCompany') || 'companyA';
                                                                                                                                                              const amount = document.getElementById('financeAmount').value;
                                                                                                                                                                      const type = document.getElementById('financeType').value;

                                                                                                                                                                              console.log(`Saving for ${activeCompany}:`, { type, amount, date: new Date().toISOString() });
                                                                                                                                                                                      alert(`Transaction logged successfully for ${activeCompany}!`);
                                                                                                                                                                                              e.target.reset(); // Clears the form fields
                                                                                                                                                                                                  });

                                                                                                                                                                                                      // Orders Form Handler
                                                                                                                                                                                                          document.getElementById('orderForm').addEventListener('submit', (e) => {
                                                                                                                                                                                                                  e.preventDefault();
                                                                                                                                                                                                                          const activeCompany = localStorage.getItem('activeCompany') || 'companyA';
                                                                                                                                                                                                                                  const client = document.getElementById('clientName').value;
                                                                                                                                                                                                                                          const total = document.getElementById('orderTotal').value;

                                                                                                                                                                                                                                                  console.log(`Saving order for ${activeCompany}:`, { client, total, status: 'Pending' });
                                                                                                                                                                                                                                                          alert(`Order logged successfully for ${activeCompany}!`);
                                                                                                                                                                                                                                                                  e.target.reset();
                                                                                                                                                                                                                                                                      });

                                                                                                                                                                                                                                                                          // Employee Form Handler
                                                                                                                                                                                                                                                                              document.getElementById('employeeForm').addEventListener('submit', (e) => {
                                                                                                                                                                                                                                                                                      e.preventDefault();
                                                                                                                                                                                                                                                                                              const activeCompany = localStorage.getItem('activeCompany') || 'companyA';
                                                                                                                                                                                                                                                                                                      const name = document.getElementById('employeeName').value;
                                                                                                                                                                                                                                                                                                              const role = document.getElementById('employeeRole').value;

                                                                                                                                                                                                                                                                                                                      console.log(`Registering employee for ${activeCompany}:`, { name, role });
                                                                                                                                                                                                                                                                                                                              alert(`Employee registered successfully for ${activeCompany}!`);
                                                                                                                                                                                                                                                                                                                                      e.target.reset();
                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                                                