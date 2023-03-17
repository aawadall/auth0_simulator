# Base Image dotnet core 7 sdk for building the application
FROM mcr.microsoft.com/dotnet/sdk:7.0 as build

# Set the building directory
WORKDIR /src

# Copy code 
COPY . .

# Restore 
RUN dotnet restore

# Publish
RUN dotnet publish -c Release -o ./out

# Base Image dotnet core 7 runtime for running the application
FROM mcr.microsoft.com/dotnet/runtime:7.0-alpine

# Set the working directory
WORKDIR /app

# Copy the published code
COPY --from=build /src/out .

# Run the application
CMD ["dotnet", "dotnet_sim.dll"]