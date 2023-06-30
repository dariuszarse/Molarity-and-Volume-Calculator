# Use the official Nginx base image
FROM nginx:latest

# Set the working directory
WORKDIR /var/www/html

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/nginx.conf

# Copy your HTML, CSS, and JavaScript files to the appropriate location
COPY index.html /var/www/html/index.html
COPY styles.css /var/www/html/styles.css
COPY scripts.js /var/www/html/scripts.js

# Expose the appropriate port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
