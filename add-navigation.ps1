# FILE: add-navigation.ps1
# Run from root: powershell -ExecutionPolicy Bypass -File add-navigation.ps1

Write-Host "🌍 DharaVerse Navigation Injector" -ForegroundColor Cyan
Write-Host "================================="

$count = 0
$files = Get-ChildItem -Path . -Filter "*.html" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw

    # Skip if already has navigation
    if ($content -match "navigation\.css") {
        Write-Host "⏭️  Skip: $($file.FullName)" -ForegroundColor Yellow
        continue
    }

    # Add before </head>
    if ($content -match "</head>") {
        $newContent = $content -replace "</head>", @"
<link rel="stylesheet" href="/css/navigation.css">
<script src="/js/navigation.js" defer></script>
</head>
"@
        Set-Content -Path $file.FullName -Value $newContent -NoNewline
        Write-Host "✅ Added: $($file.FullName)" -ForegroundColor Green
        $count++
    } else {
        Write-Host "⚠️  No </head>: $($file.FullName)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "================================="
Write-Host "✅ Done! Navigation added to $count files" -ForegroundColor Green
