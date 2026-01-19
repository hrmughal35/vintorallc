# GitHub Repository Setup Script for Vintora LLC
# Run this script after creating the repository on GitHub

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "GitHub Repository Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Get repository name
$repoName = Read-Host "Enter your GitHub repository name (e.g., 'vintora-llc')"

# Get GitHub username
$username = Read-Host "Enter your GitHub username (e.g., 'hrmughal35')"

if ([string]::IsNullOrWhiteSpace($repoName) -or [string]::IsNullOrWhiteSpace($username)) {
    Write-Host "Error: Repository name and username are required!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Setting up remote repository..." -ForegroundColor Yellow

# Add remote origin
git remote add origin "https://github.com/$username/$repoName.git"

# Check if remote was added successfully
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Remote 'origin' added successfully" -ForegroundColor Green
} else {
    Write-Host "Remote might already exist. Updating..." -ForegroundColor Yellow
    git remote set-url origin "https://github.com/$username/$repoName.git"
}

Write-Host ""
Write-Host "Current branch: master" -ForegroundColor Yellow
Write-Host "Renaming branch to 'main'..." -ForegroundColor Yellow
git branch -M main

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Go to https://github.com/new" -ForegroundColor White
Write-Host "2. Create a new repository named: $repoName" -ForegroundColor White
Write-Host "3. DO NOT initialize with README, .gitignore, or license" -ForegroundColor White
Write-Host "4. After creating the repository, run:" -ForegroundColor White
Write-Host ""
Write-Host "   git push -u origin main" -ForegroundColor Green
Write-Host ""
Write-Host "Or run this script again and it will attempt to push automatically." -ForegroundColor White
Write-Host ""

$pushNow = Read-Host "Do you want to push now? (y/n)"

if ($pushNow -eq "y" -or $pushNow -eq "Y") {
    Write-Host ""
    Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✓ Successfully pushed to GitHub!" -ForegroundColor Green
        Write-Host "Repository URL: https://github.com/$username/$repoName" -ForegroundColor Cyan
    } else {
        Write-Host ""
        Write-Host "Push failed. Make sure:" -ForegroundColor Red
        Write-Host "1. The repository exists on GitHub" -ForegroundColor Red
        Write-Host "2. You have the correct permissions" -ForegroundColor Red
        Write-Host "3. You're authenticated with GitHub" -ForegroundColor Red
    }
}
