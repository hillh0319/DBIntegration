    $(document).ready(function () {
        $('#calculate-button').on('click', function () {
            const P = parseFloat($('#principal').val()); // Principal amount
            const annualInterestRate = parseFloat($('#interest-rate').val()); // Annual interest rate (%)
            const y = parseInt($('#loan-term').val()) * 12; // Convert loan term to months

            if (P && annualInterestRate && y) {
                const i = (annualInterestRate / 100) / 12; // Convert annual rate to monthly rate

                // Correct amortization formula
                const numerator = i * Math.pow(1 + i, y);
                const denominator = Math.pow(1 + i, y) - 1;
                const A = P * (numerator / denominator); // Monthly payment

                // Round all values to 4 decimal places
                const iRounded = i.toFixed(4);
                const numRounded = numerator.toFixed(4);
                const denomRounded = denominator.toFixed(4);
                const ARounded = A.toFixed(2);

                // Display results
                $('#result').html(
                    `<strong style="color: green;">Monthly Payment: $${ARounded}</strong>`
                );

                // Display step-by-step calculations
                $('#steps').html(
                    `<h3>Calculation Steps:</h3>
                    <strong>Step 1: Convert Annual Interest Rate to Monthly:</strong> (${annualInterestRate}% ÷ 12) = ${iRounded}<br>
                    <strong>Step 2: Apply Formula:</strong>
                    A = ${P} × [${iRounded}(1 + ${iRounded})<sup>${y}</sup>] ÷ [(1 + ${iRounded})<sup>${y}</sup> - 1]<br>
                    <strong>Step 3: Numerator</strong> = ${iRounded} × ${(Math.pow(1 + i, y)).toFixed(4)} = ${numRounded}<br>
                    <strong>Step 4: Denominator</strong> = ${(Math.pow(1 + i, y)).toFixed(4)} - 1 = ${denomRounded}<br>
                    <span style="color: green;"><strong>Final Calculation:</strong> A ≈ $${ARounded}</span>`
                );
            } else {
                $('#result').html('<span style="color: red;">Please fill in all fields.</span>');
                $('#steps').html('');
            }
        });
    });