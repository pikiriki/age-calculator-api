# Age Calculator API

A small Node.js backend that receives two years through URL query parameters and returns an approximate age.

Built using Node’s built-in HTTP module, without a framework or external dependencies.

## What it does

Example request:

http://localhost:3000/?birthYear=2000&currentYear=2026

Response:

```text
Your approximate age is 26.
```

Calculation:

```text
currentYear - birthYear = approximate age
```

The result is approximate because the calculator does not consider the birth month or day.

## Requirements

- Node.js installed.
- A browser to send requests.

## How to run

Open a terminal inside the project folder and run:

```bash
node server.js
```

Expected terminal output:

```text
Server running at http://localhost:3000
```

Open this URL in your browser:

http://localhost:3000/?birthYear=2000&currentYear=2026

To stop the server, press Control + C in its terminal.

After editing server.js, save the file and restart the server.

## Inputs

| Parameter | Purpose | Example |
|---|---|---|
| birthYear | The person's birth year | 2000 |
| currentYear | The year to calculate against | 2026 |

Both parameters are required.

The client supplies currentYear. The server does not automatically look up the actual year.

## How a request is handled

1. Receive the HTTP request.
2. Parse its URL.
3. Extract birthYear and currentYear as text.
4. Reject missing or empty inputs.
5. Convert the inputs using Number().
6. Reject conversion results that are NaN.
7. Reject a birth year greater than the supplied current year.
8. Subtract the years.
9. Build and send the response text.

## Validation

| Input problem | Response |
|---|---|
| Either parameter is missing or empty | Please provide both birthYear and currentYear. |
| Either conversion produces NaN | Please provide valid numbers for both years. |
| birthYear is greater than currentYear | birthYear cannot be greater than currentYear. |

Equal years are allowed and produce an approximate age of 0.

## What I learned

- A request can carry multiple query parameters separated by &.
- new URL() parses URL text into structured information.
- searchParams.get() returns a string for a present parameter and null for a missing one.
- Text containing digits is still text.
- typeof reveals a value's type.
- Adding a string and a number can join text instead of performing numerical addition.
- Number() explicitly converts an input into a numerical value.
- Number(null) and Number("") both produce 0, so presence checks must happen before conversion.
- Number.isNaN() detects the special value NaN.
- A successfully converted number can still violate a rule of the application.
- > compares numerical values.
- || combines conditions using OR.
- A template literal inserts a calculated value into response text.
- res.end() finishes the response.
- return stops the current request-handling function.
- Validation order matters.
- console.log() helps trace data through the backend.
- Git records checkpoints as the project develops.

## Project files

- server.js — server, input checks, calculation, and response.
- package.json — Node project metadata.
- .gitignore — files and folders Git should ignore.
- README.md — project instructions and learning notes.

## Current limitations

- Calculates a year difference, not an exact age.
- Does not reject every unsuitable year, including decimal years, negative years, whitespace-only input, or Infinity.
- Returns plain text.
- Uses the same handler for all request paths and methods.
- Validation messages currently use the default HTTP status of 200.