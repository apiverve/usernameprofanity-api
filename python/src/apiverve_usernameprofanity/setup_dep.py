from setuptools import setup, find_packages

setup(
    name='apiverve_usernameprofanity',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Username Profanity flags offensive or inappropriate usernames before they reach your database. Send any candidate handle to receive a clear true or false profanity check result.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/usernameprofanity?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
