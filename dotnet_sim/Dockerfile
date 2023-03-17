# Base Image dotnet core 7 sdk for building the application
FROM mcr.microsoft.com/dotnet/sdk:7.0 as build

# Set the building directory
WORKDIR /src

# Copy code 
COPY . .

# Restore 
RUN dotnet restore

# Publish exe file
RUN dotnet publish -c Release -o ./out

# Base Image dotnet core 7 runtime for running the application
FROM mcr.microsoft.com/dotnet/aspnet:7.0

# Set the working directory
WORKDIR /app

# Copy the published code
COPY --from=build /src/out .

# Copy CERT
COPY --from=build /src/web.pfx /https/aspnetapp.pfx

# Run the application
CMD ["dotnet", "web.dll"]