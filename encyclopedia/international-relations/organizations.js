/* =====================================================
   UNITY ATLAS - Organizations Page JavaScript
   ===================================================== */

document.addEventListener('DOMContentLoaded', function() {
    initOrganizationsPage();
});

function initOrganizationsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const orgCode = urlParams.get('code');

    if (orgCode) {
        // Show specific organization
        showOrganizationDetail(orgCode);
    } else {
        // Show all organizations list
        showOrganizationsList();
    }
}

function showOrganizationsList() {
    const main = document.getElementById('orgMain');
    const orgs = dataManager.getAllOrganizations();

    // Group by type
    const grouped = {
        political: orgs.filter(o => o.type === 'political'),
        economic: orgs.filter(o => o.type === 'economic'),
        military: orgs.filter(o => o.type === 'military'),
        regional: orgs.filter(o => o.type === 'regional'),
        humanitarian: orgs.filter(o => o.type === 'humanitarian')
    };

    main.innerHTML = `
        <div class="org-list-page">
            <header class="org-list-header">
                <h1 class="org-list-title">🏛️ International Organizations</h1>
                <p class="org-list-subtitle">The institutions that shape global cooperation</p>
            </header>

            ${Object.entries(grouped).map(([type, typeOrgs]) => {
                if (typeOrgs.length === 0) return '';
                return `
                    <section class="org-type-section">
                        <h2 class="org-type-title">${capitalizeFirst(type)} Organizations</h2>
                        <div class="organizations-grid">
                            ${typeOrgs.map(org => renderOrgCard(org)).join('')}
                        </div>
                    </section>
                `;
            }).join('')}
        </div>
    `;

    // Add click handlers
    main.querySelectorAll('.org-card').forEach(card => {
        card.addEventListener('click', () => {
            const code = card.dataset.code;
            window.location.href = `organizations.html?code=${code}`;
        });
    });
}

function renderOrgCard(org) {
    const members = dataManager.getOrganizationMembers(org.code);
    const memberFlags = members.slice(0, 6).map(m => m.flag).join('');

    return `
        <article class="org-card" data-code="${org.code}">
            <div class="org-card-header">
                <div class="org-logo" style="background: ${org.color}20">
                    ${org.logo}
                </div>
                <div class="org-info">
                    <h3>${org.name}</h3>
                    <span class="org-abbr">${org.abbr}</span>
                </div>
            </div>
            <p class="org-description">${org.description}</p>
            <div class="org-stats">
                <div class="org-stat">
                    <span class="org-stat-value">${org.members}</span>
                    <span class="org-stat-label">Members</span>
                </div>
                <div class="org-stat">
                    <span class="org-stat-value">${org.founded}</span>
                    <span class="org-stat-label">Founded</span>
                </div>
            </div>
            <div class="org-members-preview">
                ${memberFlags}
                ${members.length > 6 ? `<span>+${members.length - 6}</span>` : ''}
            </div>
        </article>
    `;
}

function showOrganizationDetail(orgCode) {
    const org = dataManager.getOrganization(orgCode);
    
    if (!org) {
        showError('Organization not found');
        return;
    }

    const members = dataManager.getOrganizationMembers(orgCode);
    const main = document.getElementById('orgMain');

    document.title = `${org.name} | Unity Atlas`;

    main.innerHTML = `
        <!-- Hero -->
        <section class="org-detail-hero" style="--org-color: ${org.color}">
            <div class="org-detail-logo">${org.logo}</div>
            <h1 class="org-detail-name">${org.name}</h1>
            <span class="org-detail-abbr">${org.abbr}</span>
            <p class="org-detail-description">${org.description}</p>
            
            <div class="org-detail-stats">
                <div class="org-detail-stat">
                    <span class="org-detail-stat-value">${members.length}</span>
                    <span class="org-detail-stat-label">Member States</span>
                </div>
                <div class="org-detail-stat">
                    <span class="org-detail-stat-value">${org.founded}</span>
                    <span class="org-detail-stat-label">Founded</span>
                </div>
                <div class="org-detail-stat">
                    <span class="org-detail-stat-value">${capitalizeFirst(org.type)}</span>
                    <span class="org-detail-stat-label">Type</span>
                </div>
            </div>
        </section>

        <!-- Info -->
        <section class="org-info-section">
            <div class="org-info-card">
                <div class="org-info-grid">
                    <div class="org-info-item">
                        <div class="org-info-icon">📍</div>
                        <div class="org-info-content">
                            <h4>Headquarters</h4>
                            <p>${org.headquarters}</p>
                        </div>
                    </div>
                    <div class="org-info-item">
                        <div class="org-info-icon">📅</div>
                        <div class="org-info-content">
                            <h4>Established</h4>
                            <p>${org.founded}</p>
                        </div>
                    </div>
                    <div class="org-info-item">
                        <div class="org-info-icon">🏷️</div>
                        <div class="org-info-content">
                            <h4>Type</h4>
                            <p>${capitalizeFirst(org.type)} Organization</p>
                        </div>
                    </div>
                    ${org.website ? `
                        <div class="org-info-item">
                            <div class="org-info-icon">🌐</div>
                            <div class="org-info-content">
                                <h4>Website</h4>
                                <p><a href="${org.website}" target="_blank" rel="noopener">${org.website.replace('https://', '')}</a></p>
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        </section>

        <!-- Members -->
        <section class="org-members-section">
            <h2 class="org-members-title">Member States (${members.length})</h2>
            <div class="org-members-grid">
                ${members.map(member => `
                    <a href="country.html?code=${member.code}" class="org-member-card">
                        <span class="org-member-flag">${member.flag}</span>
                        <span class="org-member-name">${member.name}</span>
                    </a>
                `).join('')}
            </div>
        </section>
    `;
}

function showError(message) {
    const main = document.getElementById('orgMain');
    main.innerHTML = `
        <div class="error-state" style="min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h2>Error</h2>
            <p>${message}</p>
            <a href="organizations.html" style="margin-top: var(--space-lg); color: var(--primary-600);">← Back to organizations</a>
        </div>
    `;
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
